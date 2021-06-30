const { User, Passion, UserInformation } = require("../../models");
const faker = require("faker");
const { fake } = require("faker");
const { data_tinder } = require("../data/userTinder.json");
const { create } = require("../../models/AgeRange");

const getListPassion = async (listPassion) => {
  const resultListPassionId = [];

  if (!Array.isArray(listPassion) || !listPassion.length)
    return resultListPassionId;

  const getPassionId = async (fake_id) => {
    try {
      const findPassion = await Passion.findOne({
        fake_id: fake_id,
      });

      if (findPassion) {
        resultListPassionId.push(findPassion._id);
      }
    } catch (error) {
      console.log("User - Passion", error);
    }
  };

  await Promise.all(listPassion.map((passion) => getPassionId(passion.id)));

  return resultListPassionId;
};

const migrateUser = async () => {
  const createUserInfor = async ({ user }) => {
    const newUserInformation = new UserInformation({
      description: user.bio,
      hobbies: faker.lorem.sentence(),
      job_title: faker.name.jobTitle(),
      company_name: faker.company.companyName(),
      gender: user.gender,
      city_name: user.city ? user.city.name : faker.address.city(),
    });

    try {
      const savedUserInfo = await newUserInformation.save();
      if (savedUserInfo) return savedUserInfo._id;
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (userInfo) => {
    const { photos } = userInfo.user;
    let listPics = [];

    photos.map((photo) => listPics.push(photo.url));

    let listPassion = [];
    if (userInfo?.experiment_info) {
      listPassion = await getListPassion(
        userInfo?.experiment_info.user_interests.selected_interests
          ? userInfo.experiment_info.user_interests.selected_interests
          : []
      );
    }

    let user_info_id = await createUserInfor(userInfo);

    console.log(listPassion);

    const newUser = new User({
      name: userInfo.user.name,
      distance: userInfo.distance_mi,
      email: faker.internet.email(),
      dob: userInfo.user.birth_date,
      schools: userInfo.teaser?.string ? userInfo.teaser.string : "",
      cell_phone: faker.phone.phoneNumber(),
      user_info_id,
      images: listPics,
      passions: listPassion,
    });

    try {
      const savedUser = await newUser.save();

      if (savedUser) {
        console.log(savedUser.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  await Promise.all(data_tinder.map((userInfo) => createUser(userInfo)));
};

module.exports = migrateUser;

import Sequelize from 'sequelize';

const db = new Sequelize(
  'postgres://qiybhcsnbclklg:309ed03254a7c664709107f901212dfc22cf2101b73df429cb91685cab2e755e@ec2-79-125-110-209.eu-west-1.compute.amazonaws.com:5432/deq11uvrjvn9o8',
);

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
    unique: true,
  },
  text: {
    type: Sequelize.STRING,
  },
});

Post.sync({ force: true }).then(() => {
  console.log('Post resen');
});


export default db;

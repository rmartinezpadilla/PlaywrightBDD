export default {
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.js'],
    generateTitle: false // Evita que use test.describe()
};

module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('accessKeyId'),
      secretAccessKey: env('secretAccessKey'),
      region: env('us-east-1'),
      params: {
        Bucket: env('app-wards-lds'),
      },
    },
  },
});

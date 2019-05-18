module.exports = {
  apps: [{
    name: 'image-gallery',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-222-145-234.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/fec-hratx41.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nike-hratx41-fec/image-gallery.git',
      path: '/home/ubuntu/image-gallery',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
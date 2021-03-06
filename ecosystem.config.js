module.exports = {
  apps: [{
    name: 'image-gallery',
    script: './server/index.js',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-225-10-188.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/image-gallery-deploy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nike-hratx41-fec/image-gallery.git',
      path: '/home/ubuntu/image-gallery',
      // 'pre-setup': "pm2 delete image-gallery && sudo rm -rf image-gallery",
      'post-deploy': 'npm install && npm run deploy-compile && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
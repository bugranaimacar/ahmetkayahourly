const { IgApiClient } = require('instagram-private-api')
const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
const cron = require('node-cron');

const username = 'username'
const password = 'password'

const ig = new IgApiClient()

const postvideo = async() => {
    try {
        ig.state.generateDevice(username)
        if (typeof user == 'undefined') {
            user = await ig.account.login(username, password)
        }
        let tamvakit = new Date();
        console.log('YENİ UPLOAD:' + tamvakit + '\n')

        const video = './ahmetkaya.mp4'
        const published = await ig.publish.video({
            video: await readFileAsync(video),
            coverImage: await readFileAsync('./kapak.png'),
            caption: 'Ahmet Kaya ' + tamvakit
        })
        console.log(published)

    } catch (error) {
        console.log('HATA:\n')
        console.log(error)
    }
}

postvideo()
cron.schedule('00 59 * * * *', function() {
    postvideo()
});
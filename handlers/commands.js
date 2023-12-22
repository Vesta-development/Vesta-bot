async function commands(client) {
    const fs = require("fs")
    
    let commandArray = []

    const Cfolder = fs.readdirSync("./Commands")

    for (const folder of Cfolder) {
        const CFiles = fs.readdirSync(`./Commands/${folder}`).filter((w) => w.endsWith(".js"))

        for (const file of CFiles) {
            const CFile = require(`../Commands/${folder}/${file}`)

            const props = { folder, ...CFile }

            client.commands.set(CFile.data.name, props)

            commandArray.push(CFile.data.toJSON())

            continue;
        }
    }

    client.application.commands.set(commandArray)

    return console.log(`Loaded ${commandArray.length} commands`)
}

module.exports = { commands }
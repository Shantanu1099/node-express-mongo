import colors from "./utils/colors.js";

const log = console.log;

const logger = {
    warn: (message => log(colors.warn(message))),
    info: (message => log(colors.info(message))),
    silly: (message => log(colors.silly(message))),
    verbose: (message => log(colors.verbose(message))),
    input: (message => log(colors.input(message))),
    data: (message => log(colors.data(message))),
    help: (message => log(colors.help(message))),
    debug: (message => log(colors.debug(message))),
    error: (message => log(colors.error(message)))
}

export default logger;

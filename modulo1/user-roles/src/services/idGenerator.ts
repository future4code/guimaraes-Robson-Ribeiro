import { v4 } from "uuid"

class idGenerator {
    generateId = () => {
        return v4()
    }
}

export default new idGenerator()
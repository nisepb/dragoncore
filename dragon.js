const DEFAULT_PROPERTIES = {
 nickname: 'unanmed',
 get birthdate () {
     return new Date()
 }
}
// sets default propertioes for objects (dragon in this case)
// Does it set it for all objects?

class Dragon {
    constructor ({birthdate, nickname} = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}

module.exports = Dragon;
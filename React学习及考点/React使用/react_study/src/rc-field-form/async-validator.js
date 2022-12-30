

class Schema {
    constructor(descriptor) {
        this.descriptor = descriptor
    }

    validate(values) {
        return new Promise(async (resolve, reject) => {
            let errorFields = []

            for (let name in this.descriptor) {
                let rules = this.descriptor[name]
                let ruleKeys = Object.keys(rules)
                let value = values[name]
                let errors = []

                for (let i = 0; i < ruleKeys.length; i++) {
                    let key = ruleKeys[i]
                    // 必填
                    if (key === 'required') {
                        if (rules[key] && !value) {
                            errors.push(`${name} is required （是必填项）`)
                        }
                    } else if (key === 'min') {    // 最小长度
                        if (rules[key] > value.length) {
                            errors.push(`${name} 最少是${rules[key]}个`)
                        }
                    } else if (key === 'max') {
                        if (rules[key] < value.length) {
                            errors.push(`${name} 最多是${rules[key]}个`)
                        }
                    } else if (key === 'validate') {
                        let validate = rules[key]
                        let result = await validate(rules[key], value)
                        if (result.length > 0) {
                            errors.push(`${name} 不符合自定义校验器的规则判断`)
                        }
                    }
                }

                if (errors.length > 0) {
                    errorFields.push({ name, errors })
                }
            }

            if (errorFields.length > 0) {
                reject({ errorFields, values })
            } else {
                resolve(values)
            }
        })
    }
}

export default Schema
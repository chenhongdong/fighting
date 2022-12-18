
class Schema {
    private descriptor
    constructor(descriptor: any) {
        this.descriptor = descriptor
    }

    validate(values: any) {
        return new Promise(async (resolve, reject) => {
            const errorFields: any[] = []

            console.log('看看', this.descriptor)
            for (let name in this.descriptor) {
                const rules = this.descriptor[name]
                const ruleKeys = Object.keys(rules)
                const val = values[name]
                const errors = []

                for (let i = 0; i < ruleKeys.length; i++) {
                    const key = ruleKeys[i]
                    if (key === 'required' && !val) {
                        errors.push(`${name}是必填项`)
                    } else if (key === 'min') {
                        if (val.length < rules[key]) {
                            errors.push(`${name}最少${rules[key]}个字符`)
                        }
                    } else if (key === 'max') {
                        if (val.length > rules[key]) {
                            errors.push(`${name}最多${rules[key]}个字符`)
                        }
                    } else if (key === 'validate') {
                        const validateFn = rules[key]
                        const res = await validateFn(rules, val)
                        if (res !== '') {
                            errors.push(res)
                        }
                    }
                }

                if (errors.length > 0) {
                    errorFields.push({ name, errors })
                }
            }

            if (errorFields.length > 0) {
                reject({ values, errorFields })
            } else {
                resolve(values)
            }
        })
    }
}


export default Schema
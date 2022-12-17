module.exports = {
    verbose: true,  // 显示详细信息
    clearMocks: true,   // 清除mock数据
    collectCoverage: true,  // 收集测试覆盖率信息
    reporters: ['default', 'jest-junit'],   // 报告的格式
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],    // 模块扩展名配置，从左向右开始找这些文件
    moduleDirectories: ['node_modules'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'    // 如果模块是以.tsx结尾的，需要用ts-jest进行转译
    },
    // 表示要进行单元测试的正则匹配
    // 在__test__目录下的任意文件 或者 是test|spec命名的jsx|tsx文件
    testRegex: '(/__test__/.*|(test|spec)\\.(jsx|tsx))$'
}
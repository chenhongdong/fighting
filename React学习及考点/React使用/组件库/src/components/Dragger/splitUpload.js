
/**
 * 分片上传
 */
function splitUpload() {
    const chunkSize = 2 * 1024 * 1024   // 每个小块是2M
    const file = document.querySelector('#file').files[0]   // 获取文件
    const chunks = []       // 放所有的分块
    const token = Date.now() + ''   // 一个文件所有的分块共享一个token
    let name = file.name        // 所有分块共用一个文件名
    let chunkCount = 0          // 总的文件块数量
    let sendedChunkCount = 0    // 已经上传成功的数量
    // 分片处理
    if (file.size > chunkSize) {
        let start = 0, end = 0
        while (true) {
            end += chunkSize
            let blob = file.slice(start, end)
            start += chunkSize
            if (!blob.size) {
                break
            }
            chunks.push(blob)
        }
    } else {
        chunks.push(file.slice(0))
    }

    chunkCount = chunks.length

    for (let i = 0; i < chunkCount; i++) {
        let formData = new FormData()
        formData.append('token', token)
        formData.append('file', chunks[i])
        formData.append('index', i)

        sendRequest(formData, () => {
            sendedChunkCount += 1

            if (sendedChunkCount === chunkCount) {
                let fd = new FormData()
                fd.append('type', 'join')
                fd.append('chunkCount', chunkCount)
                fd.append('filename', name)
                sendRequest(fd)
            }
        })

    }
}

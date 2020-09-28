/** 
 * 读取文件信息
 * @param {object} file - 文件信息，通过input[type="file"]读取到的文件信息
 * @param {string} readType - 读取的类型，base64=返回一个base64地址，blob=返回一个二进制文件信息
 * @return {object} result - 成功则返回对应的文件数据，失败则返回null
 * 
 * btw: 为了减少业务代码，只使用resolve来处理结果返回，失败时返回null
 */

const readFile = (file: any, readType: string) => {
  return new Promise( resolve => {
    const READER = new FileReader();

    // 判断读取类型
    switch (readType) {
      case 'base64':
        READER.readAsDataURL(file);  
        break;
      case 'blob':
        READER.readAsArrayBuffer(file);  
        break;
    }

    // 成功
    READER.onload = (e) => {
      resolve(e.target.result);
    }

    // 中断
    READER.onabort = () => {
      resolve(null);
    }

    // 失败
    READER.onerror = () => {
      resolve(null);
    }

  });
}

export default readFile;
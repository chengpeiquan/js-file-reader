import readFile from '@m/readFile';

/**
 * 读取文件信息
 * @param {object} file - 文件信息，通过input[type="file"]读取到的文件信息
 * @param {string} readType - 读取的类型，base64=返回一个base64地址，blob=返回一个二进制文件信息
 * @return {object} result - 成功则返回对应的文件数据，失败则返回null
 *
 * btw: 为了减少业务代码，只使用resolve来处理结果返回，失败时返回null
 */

const generateFiles = (fileData: any) => {
  return new Promise( resolve => {
    /**
     * 如果数据异常，则返回一个空数组
     */
    if ( !fileData ) {
      resolve([]);
      return false;
    }

    /**
     * 把要处理的图片统一处理为数组
     * 如果返回的是一个数组，说明是批量传图，否则是单图
     */
    const FILE_LIST = Array.isArray(fileData) ? [...fileData] : [fileData];

    /**
     * 获取需要的文件信息
     */
    const startReadFile = async () => {
      const RESULT = [];

      for ( let i = 0; i < FILE_LIST.length; i++ ) {
        // 最终会返回一个包含各种类型的文件对象信息
        const RESULT_ITEM: FileInfo = {
          base64: null,
          blob: null
        };

        // 获取原来的文件类型
        const FILE_TYPE: string = FILE_LIST[i].type || '';

        // 转换为base64数据，可用于本地预览
        const BASE_64 = await readFile(FILE_LIST[i], 'base64');
        RESULT_ITEM['base64'] = BASE_64;

        // 存储为二进制文件，用于传到服务器
        const BUFFER: any = await readFile(FILE_LIST[i], 'blob');
        const BLOB: Blob = new Blob([BUFFER], {
          type: FILE_TYPE
        });
        RESULT_ITEM['blob'] = BLOB;

        RESULT.push(RESULT_ITEM);
      }

      return RESULT;
    }

    /**
     * 导出处理好的数据
     */
    const NEW_FILE_LIST: Promise<FileInfo[]> = startReadFile();
    resolve(NEW_FILE_LIST);
  });
}

export default generateFiles;

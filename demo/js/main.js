async function nativeGetFileInfo (e) {
  const FILE_LIST = [...e.files];
  const RESULT = await readFile(FILE_LIST);
  console.log('native start reading');
  console.log('native result', RESULT);
  console.log('native read done.');
  console.log('');
}

// 初始化Vue
const app = new Vue({
  el: '#vue-app',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    async getFileInfo (e) {
      const FILE_LIST = [...e.target.files];
      const RESULT = await readFile(FILE_LIST);
      console.log('virtual start reading');
      console.log('virtual result', RESULT);
      console.log('virtual read done.');
      console.log('');
    }
  }
});

// 初始化Vuetify
const vuetifyApp = new Vue({
  el: '#vuetify-app',
  vuetify: new Vuetify(),
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    async getFileInfo (fileList) {
      const FILE_LIST = [...fileList];
      const RESULT = await readFile(FILE_LIST);
      console.log('vuetify start reading');
      console.log('vuetify result', RESULT);
      console.log('vuetify read done.');
      console.log('');
    }
  }
});

// 初始化iview
const iviewApp = new Vue({
  el: '#iview-app',
  data () {
    return {
      fileList: []
    }
  },
  mounted () {
  },
  methods: {
    pushFile (file) {
      this.fileList.push(file);
      return false;
    },
    async getFileInfo () {
      const FILE_LIST = this.fileList;
      const RESULT = await readFile(FILE_LIST);
      console.log('iview start reading');
      console.log('iview result', RESULT);
      console.log('iview read done.');
      console.log('');
    }
  }
});

// 初始化element
const elementApp = new Vue({
  el: '#element-app',
  data () {
    return {
      fileList: []
    }
  },
  mounted () {
  },
  methods: {
    pushFile (file) {
      this.fileList.push(file.raw);
      return false;
    },
    async getFileInfo () {
      const FILE_LIST = this.fileList;
      const RESULT = await readFile(FILE_LIST);
      console.log('element start reading');
      console.log('element result', RESULT);
      console.log('element read done.');
      console.log('');
    }
  }
});
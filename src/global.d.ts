import PushCNZZ from '@m/pushCNZZ'

declare global {
  interface Window {
    _czc: any
  }

  interface FileInfo {
    base64: any
    blob: any
  }
  
  interface Vue {
    prototype: any
    $pushCNZZ: PushCNZZ
  }
  
  interface To {
    fullPath: string
  }
}
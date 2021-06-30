import Toast, { ToastPosition } from "react-native-toast-message"

const showToastMessage = (type: string, position: ToastPosition = "bottom", heading: string, message: string, time: number)=>{
    Toast.show({
      type: type,
      position: position,
      text1: heading,
      text2: message,
      visibilityTime: time,
      })
  }

export default showToastMessage;
import Toast from 'react-native-root-toast'

export const ToastMessage = (message) => {
    return (
        Toast.show(message, {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            animation: true,
        })
    )
}
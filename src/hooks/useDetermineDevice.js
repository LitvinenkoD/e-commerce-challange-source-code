import { useEffect, useState } from "react"

export default function useDetermineDevice() {
  const widthBoundaries = [800]

  const [deviceType, setDeviceType] = useState('mobile')

  useEffect(() => {
    function handleResize(){
      if (window.matchMedia(`(max-width: ${widthBoundaries[0]}px)`).matches) 
        setDeviceType('mobile');

      else
        setDeviceType('desktop');
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return deviceType
}

declare module "react-hook-gyroscope" {
  export default function useGyroscope(): {
    x: number | null
    y: number | null
    z: number | null
    error?: boolean | null
  }
}
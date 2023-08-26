import * as React from 'react'
import { SVGProps } from 'react'

const XIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  color = '#fff',
  size = 24,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 1668.56 1221.19"
      width={size}
      height={size}
      {...rest}
    >
      <path
        fill={color}
        d="m336.33 142.251 386.39 516.64-388.83 420.05h87.51l340.42-367.76 275.05 367.76h297.8l-408.13-545.7 361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81l-604.13-807.76z"
      />
    </svg>
  )
}

export { XIcon }

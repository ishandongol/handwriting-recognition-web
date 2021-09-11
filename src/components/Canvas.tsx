import { forwardRef } from 'react'
interface CanvasProps extends React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    brushWidth?: number;
    brushHeight?:number
}

export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(({ brushWidth,brushHeight, ...rest }, ref) => {
    const widthHalf = brushWidth ? brushWidth / 2 : 0;
    const cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" opacity="1" height="${brushWidth}" viewBox="0 0 ${brushWidth} ${brushWidth}" width="${brushWidth}"><circle cx="${widthHalf}" cy="${widthHalf}" r="${widthHalf}" fill="%23ffffff" /></svg>') ${widthHalf} ${widthHalf}, auto`;
    return (
        <canvas {...rest} style={{ ...rest.style,cursor }} ref={ref} />
    )
})
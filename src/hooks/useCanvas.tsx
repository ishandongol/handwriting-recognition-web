import { useCallback, useRef, useState } from "react";

export interface CurrentPosition {
    x: number;
    y: number;
    color: string;
}


export const useCanvas = () => {
    const canvas = useRef<HTMLCanvasElement>();
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isRegularMode, setIsRegularMode] = useState<boolean>(true);
    const [isAutoWidth, setIsAutoWidth] = useState<boolean>(false);
    const [isEraser, setIsEraser] = useState<boolean>(false);

    const [currentColor, setCurrentColor] = useState<string>("#ffffff");
    const [currentWidth, setCurrentWidth] = useState<number>(15);

    const autoWidth = useRef<boolean>(false);
    const selectedSaturation = useRef<number>(100);
    const selectedLightness = useRef<number>(10);
    const selectedColor = useRef<string>("#ffffff");
    const selectedLineWidth = useRef<number>(15);
    const lastX = useRef<number>(0);
    const lastY = useRef<number>(0);
    const hue = useRef<number>(0);
    const isDrawing = useRef<boolean>(false);
    const direction = useRef<boolean>(true);
    const isRegularPaintMode = useRef<boolean>(true);
    const isEraserMode = useRef<boolean>(false);

    const ctx = useRef<CanvasRenderingContext2D | null>();

    const drawOnCanvas = useCallback((event: HTMLElementEventMap['mousemove'] | HTMLElementEventMap['touchmove']) => {
        console.log("drawing")
        if (!ctx || !ctx.current) {
            return;
        }
        ctx.current.beginPath();
        ctx.current.moveTo(lastX.current, lastY.current);
        if (event instanceof TouchEvent) {
            ctx.current.lineTo(event.touches[0].clientX, event.touches[0].clientY);
        } else {
            ctx.current.lineTo(event.offsetX, event.offsetY);
        }
        ctx.current.stroke();
        if (event instanceof TouchEvent) {
            [lastX.current, lastY.current] = [event.touches[0].clientX, event.touches[0].clientY];
        } else {
            [lastX.current, lastY.current] = [event.offsetX, event.offsetY];
        }

    }, []);

    const handleDown = useCallback((x: number, y: number) => {
        isDrawing.current = true;
        [lastX.current, lastY.current] = [x, y];
    }, []);

    const handleMouseDown = useCallback((e: HTMLElementEventMap['mousedown']) => {
        isDrawing.current = true;
        handleDown(e.offsetX, e.offsetY)
    }, [handleDown]);

    const handleTouchDown = useCallback((e: HTMLElementEventMap['touchstart']) => {
        isDrawing.current = true;
        handleDown(e.touches[0].clientX, e.touches[0].clientY)
    }, [handleDown]);

    const dynamicLineWidth = useCallback(() => {
        if (!ctx || !ctx.current) {
            return;
        }
        if (ctx.current.lineWidth > 90 || ctx.current.lineWidth < 10) {
            direction.current = !direction.current;
        }
        direction.current ? ctx.current.lineWidth++ : ctx.current.lineWidth--;
        setCurrentWidth(ctx.current.lineWidth);
    }, []);

    const drawNormal = useCallback(
        (e: HTMLElementEventMap['mousemove'] | HTMLElementEventMap['touchmove']) => {
            if (!isDrawing.current || !ctx.current) return;

            if (isRegularPaintMode.current || isEraserMode.current) {
                ctx.current.strokeStyle = selectedColor.current;

                setCurrentColor(selectedColor.current);

                autoWidth.current && !isEraserMode.current
                    ? dynamicLineWidth()
                    : (ctx.current.lineWidth = selectedLineWidth.current);

                isEraserMode.current
                    ? (ctx.current.globalCompositeOperation = "destination-out")
                    : (ctx.current.globalCompositeOperation = "source-over");
            } else {
                setCurrentColor(
                    `hsl(${hue.current},${selectedSaturation.current}%,${selectedLightness.current}%)`,
                );
                ctx.current.strokeStyle = `hsl(${hue.current},${selectedSaturation.current}%,${selectedLightness.current}%)`;
                ctx.current.globalCompositeOperation = "source-over";

                hue.current++;

                if (hue.current >= 360) hue.current = 0;

                autoWidth.current
                    ? dynamicLineWidth()
                    : (ctx.current.lineWidth = selectedLineWidth.current);
            }
            drawOnCanvas(e);
        },
        [drawOnCanvas, dynamicLineWidth],
    );

    const stopDrawing = useCallback(() => {
        isDrawing.current = false;
    }, []);
    const onResize = useCallback(() => {
        if (canvas && canvas.current) {
            // canvas.current.width = window.innerWidth;
            // canvas.current.height = window.innerHeight;
            canvas.current.width = 500;
            canvas.current.height = 500;
        }
    }, [])
    const init = useCallback(() => {
        ctx.current = canvas?.current?.getContext("2d");
        if (canvas && canvas.current && ctx && ctx.current && !isReady) {
            console.log('create')
            canvas.current.addEventListener("mousedown", handleMouseDown, false);
            canvas.current.addEventListener("mousemove", drawNormal, false);
            canvas.current.addEventListener("mouseup", stopDrawing, false);
            canvas.current.addEventListener("mouseout", stopDrawing, false);

            canvas.current.addEventListener('touchstart', handleTouchDown, false);
            canvas.current.addEventListener('touchend', stopDrawing, false);
            canvas.current.addEventListener('touchcancel', stopDrawing, false);
            canvas.current.addEventListener('touchmove', drawNormal, false);
            window.addEventListener('resize', onResize, false);
            onResize()

            ctx.current.strokeStyle = "#000";
            ctx.current.lineJoin = "round";
            ctx.current.lineCap = "round";
            ctx.current.lineWidth = 10;
            ctx.current.fillStyle ="black";
            ctx.current.fillRect(0,0,canvas.current.width,canvas.current.height)
            setIsReady(true);
        }
    }, [drawNormal, handleMouseDown, stopDrawing, handleTouchDown, isReady, onResize]);
    const clear = useCallback(() => {
        console.log("clear")
        canvas.current?.removeEventListener("mousedown", handleMouseDown, false);
        canvas.current?.removeEventListener("mousemove", drawNormal, false);
        canvas.current?.removeEventListener("mouseup", stopDrawing, false);
        canvas.current?.removeEventListener("mouseout", stopDrawing, false);

        canvas.current?.removeEventListener('touchstart', handleTouchDown, false);
        canvas.current?.removeEventListener('touchend', stopDrawing, false);
        canvas.current?.removeEventListener('touchcancel', stopDrawing, false);
        canvas.current?.removeEventListener('touchmove', drawNormal, false);
        window.removeEventListener('resize', onResize, false);
        setIsReady(false)
    }, [drawNormal, handleMouseDown, stopDrawing, handleTouchDown, onResize])

    const handleRegularMode = useCallback(() => {
        setIsRegularMode(true);
        isEraserMode.current = false;
        setIsEraser(false);
        isRegularPaintMode.current = true;
    }, []);

    const handleSpecialMode = useCallback(() => {
        setIsRegularMode(false);
        isEraserMode.current = false;
        setIsEraser(false);
        isRegularPaintMode.current = false;
    }, []);

    const handleColor = (e: any) => {
        setCurrentColor(e.currentTarget.value);
        selectedColor.current = e.currentTarget.value;
    };

    const handleWidth = (e: any) => {
        setCurrentWidth(e.currentTarget.value);
        selectedLineWidth.current = e.currentTarget.value;
    };

    const handleClear = useCallback(() => {
        if (!ctx || !ctx.current || !canvas || !canvas.current) {
            return;
        }
        ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }, []);

    const handleEraserMode = (e: any) => {
        autoWidth.current = false;
        setIsAutoWidth(false);
        setIsRegularMode(true);
        isEraserMode.current = true;
        setIsEraser(true);
    };

    const setCurrentSaturation = (e: any) => {
        setCurrentColor(
            `hsl(${hue.current},${e.currentTarget.value}%,${selectedLightness.current}%)`,
        );
        selectedSaturation.current = e.currentTarget.value;
    };

    const setCurrentLightness = (e: any) => {
        setCurrentColor(
            `hsl(${hue.current},${selectedSaturation.current}%,${e.currentTarget.value}%)`,
        );
        selectedLightness.current = e.currentTarget.value;
    };

    const setAutoWidth = (e: any) => {
        autoWidth.current = e.currentTarget.checked;
        setIsAutoWidth(e.currentTarget.checked);

        if (!e.currentTarget.checked) {
            setCurrentWidth(selectedLineWidth.current);
        } else {
            setCurrentWidth(ctx?.current?.lineWidth ?? selectedLineWidth.current);
        }
    };

    return [
        {
            canvas,
            isReady,
            currentWidth,
            currentColor,
            isRegularMode,
            isAutoWidth,
            isEraser,
        },
        {
            init,
            clear,
            handleRegularMode,
            handleSpecialMode,
            handleColor,
            handleWidth,
            handleClear,
            handleEraserMode,
            setAutoWidth,
            setCurrentSaturation,
            setCurrentLightness,
        },
    ] as any;
};
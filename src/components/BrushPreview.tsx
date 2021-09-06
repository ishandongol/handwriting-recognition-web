interface Props {
    currentColor: string;
    currentWidth: number;
    className?: string;
}

export const BrushPreview: React.FC<Props> = ({
    currentColor,
    currentWidth,
    className
}) => {
    const styles = {
        backgroundColor: currentColor,
        width: `${currentWidth}px`,
        height: `${currentWidth}px`,
    };
    return (
        <div className={className}>
            <div style={styles} className="rounded-full"></div>
        </div>
    );
};
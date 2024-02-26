import React, { useState } from 'react';

const RecentColorPicker = ({ onColorSelect }) => {
    const [selected, setSelected] = useState(null);

    const recentColors = [
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
        { hex: "FFFFFF" }, // White
    ];

    const handleColorClick = (colorItem) => {
        if (selected && selected.hex === colorItem.hex) {
            console.log('Deselecting color');
            setSelected(null);
            onColorSelect(null); // remove selected color
            return;
        }
        else {
            setSelected(colorItem);
            onColorSelect(colorItem); // "Feed" the selected color to the parent component
            console.log('Selected color:', colorItem);
        }
        
    };

    return (
        <div className="grid grid-cols-4 gap-6">
            {recentColors.map((colorItem, index) => (
                <div
                    key={index}
                    className={`w-full rounded-lg flex items-center justify-center overflow-hidden relative border-2 ${selected?.hex === colorItem.hex ? 'border-black' : 'border-gray'}`}
                    style={{ backgroundColor: `#${colorItem.hex}`, aspectRatio: '1/1' }} // Add "#" symbol dynamically
                    onClick={() => handleColorClick(colorItem)}
                >
                    <span className="text-white px-1">{"#" + colorItem.hex}</span>
                </div>
            ))}
        </div>
    );
};

export default RecentColorPicker;

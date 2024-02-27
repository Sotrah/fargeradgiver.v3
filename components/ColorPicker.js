import React, { useState } from 'react';

const ColorPicker = ({ onColorSelect }) => {
    const [selected, setSelected] = useState(null);

    const colors = [
        { hex: "CCC7BD" }, // Sheer Grey
        { hex: "9F9B7C" }, // Green Tea
        { hex: "426884" }, // True Blue
        { hex: "D1B9AA" },  // Indi Pink
        { hex: "CDBC94" },  // Earthy Yellow
        { hex: "C8CDAF" },  // Pistachio
        { hex: "A59D9A" },  // Healing Lavender
        { hex: "89755F" },  // Soft Brown
        
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
            {colors.map((colorItem, index) => (
                <div
                    key={index}
                    className={`w-full rounded-lg flex items-center justify-center overflow-hidden relative border-2 ${selected?.hex === colorItem.hex ? 'border-black' : 'border-transparent'}`}
                    style={{ backgroundColor: `#${colorItem.hex}`, aspectRatio: '1/1' }} // Add "#" symbol dynamically
                    onClick={() => handleColorClick(colorItem)}
                >
                    {/* <span className="text-white px-1">{"#" + colorItem.hex}</span> */}
                </div>
            ))}
        </div>
    );
};

export default ColorPicker;

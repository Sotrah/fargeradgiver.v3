import React, { useState } from 'react';
import { ColorType } from "@/components/ColorType";

const RecentColorPicker: React.FC<{ selectedColor: ColorType | null, onColorSelect: (color: ColorType | null) => void }> = ({ selectedColor, onColorSelect }) => {

    const recentColors = [
        {
            "fullName": "JOTUN 0288 Mexico",
            "shortName": "Mexico",
            "code": "0288",
            "ncsCode": "S3030-Y",
            "hex": "#6b9eb9",
            "description": "Er den grønn eller er den gul? Den er det beste av begge! Mexico har en spennende, frodig følelse, og kan gjerne brukes for å addere energi til et rom – eller gi en personlig touch til en detalj som for eksempel en inngangsdør.",
            "imageUrls": [],
            "matchingColors": null,
            "shades": null,
            "collections": [
              {
                "code": "gultoner",
                "name": "Gultoner",
                "promoted": false,
                "imageUrl": null,
                "createdAt": null,
                "brand": null,
                "type": null,
                "applicationArea": null
              }
            ]
          },

    ];

    const handleColorClick = (colorItem: ColorType) => {
        if (selectedColor && selectedColor.hex === colorItem.hex) {
            console.log('Deselecting color');
            onColorSelect(null); // remove selected color
            return;
        }
        else {
            onColorSelect(colorItem); // "Feed" the selected color to the parent component
            console.log('Selected color:', colorItem);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-6">
            {recentColors.map((colorItem, index) => (
                <div
                    key={index}
                    className={`w-full rounded-lg flex items-center justify-center overflow-hidden relative border-2 ${selectedColor?.hex === colorItem.hex ? 'border-black' : 'border-transparent'} hover:border-gray-500`}
                    style={{ backgroundColor: colorItem.hex, aspectRatio: '1/1' }} 
                    onClick={() => handleColorClick(colorItem)}
                >
                    <span className="text-white px-1">{"#" + colorItem.hex}</span>
                </div>
            ))}
        </div>
    );
};

export default RecentColorPicker;

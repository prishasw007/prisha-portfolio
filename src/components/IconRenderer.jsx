// src/components/IconRenderer.jsx
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

const iconSets = {
    fa: FaIcons,
    si: SiIcons,
    md: MdIcons,
    io: IoIcons,
    gi: GiIcons,
    ai: AiIcons,
};

const IconRenderer = ({ iconName, size = 55, color = "#f8f1da", hoverColor = "#ffc107", fontWeight = "bold" }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (!iconName || typeof iconName !== "string") return null;

    const prefix = iconName.slice(0, 2).toLowerCase();
    const iconSet = iconSets[prefix];

    if (!iconSet) return null;

    const IconComponent = iconSet[iconName];

    if (!IconComponent) return null;

    return <IconComponent
        size={size}
        color={isHovered ? hoverColor : color}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transition: "color 0.3s ease" }}
    />;
};

export default IconRenderer;

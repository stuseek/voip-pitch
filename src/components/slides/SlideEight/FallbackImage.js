import React, { useState } from 'react';
import { Database } from 'lucide-react';

/**
 * FallbackImage component that displays a fallback icon when image loading fails
 *
 * @param {string} src - The source URL for the image
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS class names for the image
 * @param {React.ReactNode} fallbackIcon - Optional custom fallback icon component. Defaults to Database icon.
 * @returns {JSX.Element}
 */
const FallbackImage = ({ src, alt, className = "", fallbackIcon = null }) => {
    const [imageError, setImageError] = useState(false);

    // Handle image load error
    const handleError = () => {
        setImageError(true);
    };

    // If image failed to load, show fallback icon
    if (imageError) {
        const FallbackIcon = fallbackIcon || (
            <div className={`flex items-center justify-center ${className}`}>
                <Database size={18} className="text-slate-400" />
            </div>
        );

        return FallbackIcon;
    }

    // Otherwise, attempt to show the image
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
};

export default FallbackImage;
import { useEffect } from 'react';

/**
 * Custom hook to dynamically inject JSON-LD structured data schema into the document head.
 * Cleanups on unmount to prevent page-to-page schema pollution.
 * @param schema The JSON-LD schema object
 */
export const useSchema = (schema: object) => {
  const schemaString = JSON.stringify(schema);

  useEffect(() => {
    // Create script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = schemaString;
    document.head.appendChild(script);

    // Remove script tag on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [schemaString]);
};
export default useSchema;

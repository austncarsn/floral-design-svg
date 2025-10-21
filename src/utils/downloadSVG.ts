/**
 * Download SVG element as .svg file
 */
export async function downloadSVG(
  svgElement: SVGElement,
  filename: string,
  options?: {
    addMetadata?: boolean;
    title?: string;
    description?: string;
    creator?: string;
  }
): Promise<void> {
  // Clone the SVG to avoid modifying the original
  const svgClone = svgElement.cloneNode(true) as SVGElement;
  
  // Add metadata if requested
  if (options?.addMetadata) {
    const defs = svgClone.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!svgClone.querySelector('defs')) {
      svgClone.insertBefore(defs, svgClone.firstChild);
    }

    // Add title
    if (options.title) {
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = options.title;
      svgClone.insertBefore(title, svgClone.firstChild);
    }

    // Add description
    if (options.description) {
      const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
      desc.textContent = options.description;
      svgClone.insertBefore(desc, svgClone.firstChild);
    }

    // Add metadata element
    const metadata = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
    metadata.innerHTML = `
      <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
               xmlns:dc="http://purl.org/dc/elements/1.1/">
        <rdf:Description>
          ${options.creator ? `<dc:creator>${options.creator}</dc:creator>` : ''}
          <dc:title>${options.title || filename}</dc:title>
          ${options.description ? `<dc:description>${options.description}</dc:description>` : ''}
          <dc:date>${new Date().toISOString()}</dc:date>
        </rdf:Description>
      </rdf:RDF>
    `;
    defs.appendChild(metadata);
  }

  // Ensure SVG has proper attributes
  if (!svgClone.hasAttribute('xmlns')) {
    svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  }
  if (!svgClone.hasAttribute('xmlns:xlink')) {
    svgClone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  }

  // Serialize SVG to string
  const serializer = new XMLSerializer();
  let svgString = serializer.serializeToString(svgClone);

  // Add XML declaration
  svgString = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgString;

  // Create blob
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  
  // Create download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.svg`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Copy SVG code to clipboard
 */
export async function copySVGCode(svgElement: SVGElement): Promise<void> {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);
  
  try {
    await navigator.clipboard.writeText(svgString);
  } catch (err) {
    console.error('Failed to copy SVG code:', err);
    throw err;
  }
}

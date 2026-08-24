const styles: Record<string, string> = new Proxy({}, { get: (_, key) => String(key) });
export default styles;

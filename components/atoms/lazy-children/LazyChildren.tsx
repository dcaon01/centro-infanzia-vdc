'use client'

const LazyChildren = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
        </>
    );
}

export default LazyChildren;
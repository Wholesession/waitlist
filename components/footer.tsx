export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-500">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Wholesession. All rights reserved.</p>
            </div>
        </footer>
    );
}

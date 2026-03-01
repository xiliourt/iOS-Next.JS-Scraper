interface FooterProps {
  git: string;
}

const Footer = ({ git }: FooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 text-center border-t border-slate-800 bg-slate-900/80 backdrop-blur-md z-50">
      <p className="text-slate-400 text-xs sm:text-sm">
        Open Source Project. View source on{' '}
        <a 
          href={git} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-300 hover:underline transition-colors font-medium"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

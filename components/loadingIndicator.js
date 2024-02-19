const LoadingIndicator = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="spinner-border animate-pulse inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading lorem impsumlorem impsumlorem impsumlorem impsum...</span>
            </div>
        </div>
    );
};

export default LoadingIndicator;

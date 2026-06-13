const LoadingComponent = () => {
  return (
    <div className="flex space-x-2 justify-center items-start bg-background min-h-[50vh]">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce" />
    </div>
  );
};
export default LoadingComponent;

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-red-500 text-center p-4 bg-red-900/10 rounded-md my-10">
      {message}
    </div>
  );
}

export default ErrorMessage;

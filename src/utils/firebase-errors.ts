export const getFirebaseErrorMessage = (error: { code: string }): string => {
  const errorMessages: Record<string, string> = {
    'storage/unauthorized': 'You do not have permission to access this resource.',
    'storage/canceled': 'Upload was canceled.',
    'storage/unknown': 'An unknown error occurred.',
    'storage/object-not-found': 'File does not exist.',
    'storage/bucket-not-found': 'Storage bucket not found.',
    'storage/quota-exceeded': 'Storage quota has been exceeded.',
    'storage/unauthenticated': 'User is not authenticated.',
    'storage/invalid-checksum': 'File on the client does not match the checksum of the file received by the server.',
    'storage/retry-limit-exceeded': 'Maximum time limit on an operation has been exceeded.',
    'storage/invalid-event-name': 'Invalid event name provided.',
    'storage/invalid-url': 'Invalid URL provided.',
    'storage/invalid-argument': 'Invalid argument provided.',
    'storage/no-default-bucket': 'No default bucket has been set.',
    'storage/cannot-slice-blob': 'Cannot slice blob.',
    'storage/server-file-wrong-size': 'File on the client does not match the size of the file received by the server.',
  };

  return errorMessages[error.code] || 'An error occurred during the operation.';
};
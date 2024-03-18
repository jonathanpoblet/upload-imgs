export async function controllerUploadImg(req, res) {
  try {
    if (!req.file) res.json({ error: '400' });
    res.json({ success: 'Img Uploaded' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  }
}

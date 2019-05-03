// eslint-disable-next-line import/no-extraneous-dependencies
const { app } = require('electron');

// types that we support downloading
const DOWNLOADABLE_MIME_TYPES = [
  // video
  'application/mp4',
  'application/ogg',
  'video/mp4',
  'video/ogg',
  'video/quicktime',
  'video/webm',
  // audio
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg',
  'audio/webm',
  'audio/x-aac',
  'audio/x-wav',
  // image
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/png',
  // pdf
  'application/pdf',
];

// categories
const RESOURCE = 'Resource';
const APPLICATION = 'Application';

const VAR_FOLDER = `${app.getPath('userData')}/var`;
const DATABASE_PATH = `${VAR_FOLDER}/db.json`;
const TEMPORARY_EXTRACT_FOLDER = 'tmp';

module.exports = {
  DOWNLOADABLE_MIME_TYPES,
  TEMPORARY_EXTRACT_FOLDER,
  RESOURCE,
  APPLICATION,
  DATABASE_PATH,
  VAR_FOLDER,
};
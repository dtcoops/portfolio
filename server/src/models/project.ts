import { Schema, model } from 'mongoose';

const ProjectImageSchema = new Schema({
  src: { type: String, required: true },
  caption: { type: String, required: true },
}, { _id: false });

const MetaItemSchema = new Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
}, { _id: false });

const LinkItemSchema = new Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
}, { _id: false });

const DetailsSectionSchema = new Schema({
  heading: { type: String, required: true },
  points: [{ type: String }],
}, { _id: false });

const ProjectSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  topic: { type: String, enum: ['personal', 'school'], required: true },
  desc: { type: String, required: true },
  tags: [{ type: String }],
  thumb: { type: String, required: true },
  images: [ProjectImageSchema],
  meta: [MetaItemSchema],
  overview: [{ type: String }],
  goals: [{ type: String }],
  liveUrl: { type: String },
  links: [LinkItemSchema],
  details: [DetailsSectionSchema],
});

export const Project = model('Project', ProjectSchema);
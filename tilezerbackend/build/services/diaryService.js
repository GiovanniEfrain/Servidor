"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// ----------- Array -------------
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date }) => {
        return {
            id, date
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addEntry = () => undefined;
exports.addEntry = addEntry;
//const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// diariesWithoutSensitiveInfo[0]

import { openDB } from 'idb';

const DB_NAME = 'habit-tracker-db';
const STORE_NAME = 'habits';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    }
  });
};

export const addHabit = async (habit) => {
  const db = await initDB();
  const fullHabit = {
    ...habit,
    streak: 0,
    lastCompletedDate: null,
  };
  await db.add(STORE_NAME, fullHabit);
};

export const getHabits = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteHabit = async (id) => {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
};
export const markHabitDone = async (id) => {
  const db = await initDB();
  const habit = await db.get(STORE_NAME, id);
  const today = new Date().toISOString().split('T')[0];
  const last = habit.lastCompletedDate;

  if (last === today) return; 

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  const newStreak = last === yesterdayStr ? habit.streak + 1 : 1;

  habit.streak = newStreak;
  habit.lastCompletedDate = today;

  await db.put(STORE_NAME, habit);
};

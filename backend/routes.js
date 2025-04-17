const express = require('express');
const multer = require('multer');
const path = require('path');
const { StorageUnit, Renter, Contract, Payment } = require('./models');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, 'uploads/') });

// Get all storage units (with contract & renter)
router.get('/storages', async (req, res) => {
  const units = await StorageUnit.findAll({
    include: { model: Contract, include: [Renter, Payment] }
  });
  res.json(units);
});

// Get one unit by id
router.get('/storages/:id', async (req, res) => {
  const unit = await StorageUnit.findByPk(req.params.id, {
    include: { model: Contract, include: [Renter, Payment] }
  });
  res.json(unit);
});

// Create or update a storage unit
router.post('/storages', upload.single('contract'), async (req, res) => {
  const { line, position, isRented, renterName, renterCompany, startDate, endDate, payments } = req.body;
  // Upsert StorageUnit → then upsert related Contract, Renter, Payments...
  // (Implementation left for expansion)
  res.json({ success: true });
});

module.exports = router;

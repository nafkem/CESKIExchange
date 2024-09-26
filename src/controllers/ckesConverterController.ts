// ckESConverterController.ts
import { Request, Response, NextFunction } from 'express';
// Import your service or necessary functionality to handle transactions
import { CKESService } from '../services/CKESService'; // Assuming you have a service to handle onRamp/offRamp logic

class CKESConverterController {
  public static async onRamp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { fiatTransactionId, fiatAmountKES } = req.body;

      // Call your service or function to perform the onRamp transaction
      const result = await CKESService.onRamp(fiatTransactionId, fiatAmountKES);

      // Respond with the result
      res.status(200).json({ message: "onRamp successful", data: result });
    } catch (error) {
      next(error); // Pass the error to the error-handling middleware
    }
  }

  public static async offRamp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { cKESAmount, fiatPaymentDetails } = req.body;

      // Call your service or function to perform the offRamp transaction
      const result = await CKESService.offRamp(cKESAmount, fiatPaymentDetails);

      // Respond with the result
      res.status(200).json({ message: "offRamp successful", data: result });
    } catch (error) {
      next(error); // Pass the error to the error-handling middleware
    }
  }
}

export { CKESConverterController };

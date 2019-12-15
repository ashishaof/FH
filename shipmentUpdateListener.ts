import ShipmentSearchIndex from './shipmentSearchIndex';
import { ShipmentUpdateListenerInterface } from './ShipmentUpdateListenerInterface';

class ShipmentUpdateListener extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
  async receiveUpdate(id: string, shipmentData: any) {
    await this.updateShipment(id, shipmentData)
  }
}
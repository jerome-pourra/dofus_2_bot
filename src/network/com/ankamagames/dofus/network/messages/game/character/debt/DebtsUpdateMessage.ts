import { DebtInformation } from "./../../../../types/game/character/debt/DebtInformation";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DebtsUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8856;

	public action: number = 0;
	public debts: Array<DebtInformation>;

    public constructor()
    {
        super();
        this.debts = Array<DebtInformation>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebtsUpdateMessage(input);
    }

    private deserializeAs_DebtsUpdateMessage(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: DebtInformation;
        this._actionFunc(input);
        let _debtsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _debtsLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(DebtInformation,_id2);
            _item2.deserialize(input);
            this.debts.push(_item2);
        }
    }

    private _actionFunc(input: ICustomDataInput)
    {
        this.action = input.readByte();
        if(this.action < 0)
        {
            throw new Error("Forbidden value (" + this.action + ") on element of DebtsUpdateMessage.action.");
        }
    }

}
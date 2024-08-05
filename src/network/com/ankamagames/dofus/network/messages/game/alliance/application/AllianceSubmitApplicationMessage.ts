import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceSubmitApplicationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5885;

	public applyText: string = "";
	public allianceId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_AllianceSubmitApplicationMessage(input);
    }

    private deserializeAs_AllianceSubmitApplicationMessage(input: ICustomDataInput)
    {
        this._applyTextFunc(input);
        this._allianceIdFunc(input);
    }

    private _applyTextFunc(input: ICustomDataInput)
    {
        this.applyText = input.readUTF();
    }

    private _allianceIdFunc(input: ICustomDataInput)
    {
        this.allianceId = input.readVarUhInt();
        if(this.allianceId < 0)
        {
            throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceSubmitApplicationMessage.allianceId.");
        }
    }

}
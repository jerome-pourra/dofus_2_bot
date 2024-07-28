import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class SymbioticObjectAssociateRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9614;

	public symbioteUID: number = 0;
	public symbiotePos: number = 0;
	public hostUID: number = 0;
	public hostPos: number = 0;

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
        this.deserializeAs_SymbioticObjectAssociateRequestMessage(input);
    }

    private deserializeAs_SymbioticObjectAssociateRequestMessage(input: ICustomDataInput)
    {
        this._symbioteUIDFunc(input);
        this._symbiotePosFunc(input);
        this._hostUIDFunc(input);
        this._hostPosFunc(input);
    }

    private _symbioteUIDFunc(input: ICustomDataInput)
    {
        this.symbioteUID = input.readVarUhInt();
        if(this.symbioteUID < 0)
        {
            throw new Error("Forbidden value (" + this.symbioteUID + ") on element of SymbioticObjectAssociateRequestMessage.symbioteUID.");
        }
    }

    private _symbiotePosFunc(input: ICustomDataInput)
    {
        this.symbiotePos = input.readUnsignedByte();
        if(this.symbiotePos < 0 || this.symbiotePos > 255)
        {
            throw new Error("Forbidden value (" + this.symbiotePos + ") on element of SymbioticObjectAssociateRequestMessage.symbiotePos.");
        }
    }

    private _hostUIDFunc(input: ICustomDataInput)
    {
        this.hostUID = input.readVarUhInt();
        if(this.hostUID < 0)
        {
            throw new Error("Forbidden value (" + this.hostUID + ") on element of SymbioticObjectAssociateRequestMessage.hostUID.");
        }
    }

    private _hostPosFunc(input: ICustomDataInput)
    {
        this.hostPos = input.readUnsignedByte();
        if(this.hostPos < 0 || this.hostPos > 255)
        {
            throw new Error("Forbidden value (" + this.hostPos + ") on element of SymbioticObjectAssociateRequestMessage.hostPos.");
        }
    }

}
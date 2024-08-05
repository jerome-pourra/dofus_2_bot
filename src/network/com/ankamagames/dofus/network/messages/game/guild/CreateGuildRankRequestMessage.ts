import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CreateGuildRankRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1740;

	public parentRankId: number = 0;
	public gfxId: number = 0;
	public name: string = "";

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
        this.deserializeAs_CreateGuildRankRequestMessage(input);
    }

    private deserializeAs_CreateGuildRankRequestMessage(input: ICustomDataInput)
    {
        this._parentRankIdFunc(input);
        this._gfxIdFunc(input);
        this._nameFunc(input);
    }

    private _parentRankIdFunc(input: ICustomDataInput)
    {
        this.parentRankId = input.readVarUhInt();
        if(this.parentRankId < 0)
        {
            throw new Error("Forbidden value (" + this.parentRankId + ") on element of CreateGuildRankRequestMessage.parentRankId.");
        }
    }

    private _gfxIdFunc(input: ICustomDataInput)
    {
        this.gfxId = input.readVarUhInt();
        if(this.gfxId < 0)
        {
            throw new Error("Forbidden value (" + this.gfxId + ") on element of CreateGuildRankRequestMessage.gfxId.");
        }
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}
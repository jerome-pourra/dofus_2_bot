import { EntityLook } from "./../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ContactLookMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4925;

	public requestId: number = 0;
	public playerName: string = "";
	public playerId: number = 0;
	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
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
        this.deserializeAs_ContactLookMessage(input);
    }

    private deserializeAs_ContactLookMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
        this._playerNameFunc(input);
        this._playerIdFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readVarUhInt();
        if(this.requestId < 0)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookMessage.requestId.");
        }
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookMessage.playerId.");
        }
    }

}
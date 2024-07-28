import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AddListenerOnSynchronizedStorageMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1826;

	public player: string = "";

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
        this.deserializeAs_AddListenerOnSynchronizedStorageMessage(input);
    }

    private deserializeAs_AddListenerOnSynchronizedStorageMessage(input: ICustomDataInput)
    {
        this._playerFunc(input);
    }

    private _playerFunc(input: ICustomDataInput)
    {
        this.player = input.readUTF();
    }

}